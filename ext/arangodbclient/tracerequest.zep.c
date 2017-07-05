
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
#include "kernel/memory.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_TraceRequest) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, TraceRequest, arangodbclient, tracerequest, arangodbclient_tracerequest_method_entry, 0);

	zend_declare_property_null(arangodbclient_tracerequest_ce, SL("_headers"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_tracerequest_ce, SL("_method"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_tracerequest_ce, SL("_requestUrl"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_tracerequest_ce, SL("_body"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_string(arangodbclient_tracerequest_ce, SL("_type"), "request", ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_tracerequest_ce->create_object = zephir_init_properties_ArangoDBClient_TraceRequest;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_TraceRequest, __construct) {

	zval method, requestUrl, body;
	zval *headers_param = NULL, *method_param = NULL, *requestUrl_param = NULL, *body_param = NULL;
	zval headers;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&headers);
	ZVAL_UNDEF(&method);
	ZVAL_UNDEF(&requestUrl);
	ZVAL_UNDEF(&body);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 4, 0, &headers_param, &method_param, &requestUrl_param, &body_param);

	zephir_get_arrval(&headers, headers_param);
	zephir_get_strval(&method, method_param);
	zephir_get_strval(&requestUrl, requestUrl_param);
	zephir_get_strval(&body, body_param);


	zephir_update_property_zval(this_ptr, SL("_headers"), &headers);
	zephir_update_property_zval(this_ptr, SL("_method"), &method);
	zephir_update_property_zval(this_ptr, SL("_requestUrl"), &requestUrl);
	zephir_update_property_zval(this_ptr, SL("_body"), &body);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_TraceRequest, getHeaders) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_headers");

}

PHP_METHOD(ArangoDBClient_TraceRequest, getMethod) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_method");

}

PHP_METHOD(ArangoDBClient_TraceRequest, getRequestUrl) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_requestUrl");

}

PHP_METHOD(ArangoDBClient_TraceRequest, getBody) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_body");

}

PHP_METHOD(ArangoDBClient_TraceRequest, getType) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_type");

}

zend_object *zephir_init_properties_ArangoDBClient_TraceRequest(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _1$$3;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1$$3);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_headers"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_headers"), &_1$$3);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

