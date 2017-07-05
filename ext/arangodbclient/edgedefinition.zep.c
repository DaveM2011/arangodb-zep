
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
#include "kernel/fcall.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_EdgeDefinition) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, EdgeDefinition, arangodbclient, edgedefinition, arangodbclient_edgedefinition_method_entry, 0);

	zend_declare_property_null(arangodbclient_edgedefinition_ce, SL("_relation"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_edgedefinition_ce, SL("_fromCollections"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_edgedefinition_ce, SL("_toCollections"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_edgedefinition_ce->create_object = zephir_init_properties_ArangoDBClient_EdgeDefinition;
	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, __construct) {

	zval _0, _1;
	zval *relation_param = NULL, *fromCollections = NULL, fromCollections_sub, *toCollections = NULL, toCollections_sub;
	zval relation;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&relation);
	ZVAL_UNDEF(&fromCollections_sub);
	ZVAL_UNDEF(&toCollections_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 3, &relation_param, &fromCollections, &toCollections);

	if (!relation_param) {
		ZEPHIR_INIT_VAR(&relation);
		ZVAL_STRING(&relation, "");
	} else {
		zephir_get_strval(&relation, relation_param);
	}
	if (!fromCollections) {
		fromCollections = &fromCollections_sub;
		ZEPHIR_INIT_VAR(fromCollections);
		array_init(fromCollections);
	} else {
		ZEPHIR_SEPARATE_PARAM(fromCollections);
	}
	if (!toCollections) {
		toCollections = &toCollections_sub;
		ZEPHIR_INIT_VAR(toCollections);
		array_init(toCollections);
	} else {
		ZEPHIR_SEPARATE_PARAM(toCollections);
	}


	zephir_update_property_zval(this_ptr, SL("_relation"), &relation);
	zephir_get_arrval(&_0, fromCollections);
	ZEPHIR_CPY_WRT(fromCollections, &_0);
	zephir_get_arrval(&_1, toCollections);
	ZEPHIR_CPY_WRT(toCollections, &_1);
	zephir_update_property_zval(this_ptr, SL("_fromCollections"), fromCollections);
	zephir_update_property_zval(this_ptr, SL("_toCollections"), toCollections);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, setRelation) {

	zval *relation_param = NULL;
	zval relation;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&relation);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &relation_param);

	zephir_get_strval(&relation, relation_param);


	zephir_update_property_zval(this_ptr, SL("_relation"), &relation);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, getRelation) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_relation");

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, getToCollections) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_toCollections");

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, getFromCollections) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_fromCollections");

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, addToCollection) {

	zval *toCollection_param = NULL;
	zval toCollection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&toCollection);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &toCollection_param);

	zephir_get_strval(&toCollection, toCollection_param);


	zephir_update_property_array_append(this_ptr, SL("_toCollections"), &toCollection TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, addFromCollection) {

	zval *fromCollection_param = NULL;
	zval fromCollection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&fromCollection);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &fromCollection_param);

	zephir_get_strval(&fromCollection, fromCollection_param);


	zephir_update_property_array_append(this_ptr, SL("_fromCollections"), &fromCollection TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, clearToCollection) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	array_init(&_0);
	zephir_update_property_zval(this_ptr, SL("_toCollections"), &_0);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, clearFromCollection) {

	zval _0;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&_0);
	array_init(&_0);
	zephir_update_property_zval(this_ptr, SL("_fromCollections"), &_0);
	RETURN_MM_MEMBER(getThis(), "_fromCollections");

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, transformToArray) {

	zval transformedEd, _0, _1, _2;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&transformedEd);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(&transformedEd);
	array_init(&transformedEd);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "getrelation", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&transformedEd, SL("collection"), &_0, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "getfromcollections", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&transformedEd, SL("from"), &_1, PH_COPY | PH_SEPARATE);
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "gettocollections", NULL, 0);
	zephir_check_call_status();
	zephir_array_update_string(&transformedEd, SL("to"), &_2, PH_COPY | PH_SEPARATE);
	RETURN_CCTOR(&transformedEd);

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, createUndirectedRelation) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval vertexCollections;
	zval *relation_param = NULL, *vertexCollections_param = NULL;
	zval relation;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&relation);
	ZVAL_UNDEF(&vertexCollections);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &relation_param, &vertexCollections_param);

	zephir_get_strval(&relation, relation_param);
	zephir_get_arrval(&vertexCollections, vertexCollections_param);


	object_init_ex(return_value, arangodbclient_edgedefinition_ce);
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 52, &relation, &vertexCollections, &vertexCollections);
	zephir_check_call_status();
	RETURN_MM();

}

PHP_METHOD(ArangoDBClient_EdgeDefinition, createDirectedRelation) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *relation_param = NULL, *fromCollections, fromCollections_sub, *toCollections, toCollections_sub;
	zval relation;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&relation);
	ZVAL_UNDEF(&fromCollections_sub);
	ZVAL_UNDEF(&toCollections_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 0, &relation_param, &fromCollections, &toCollections);

	zephir_get_strval(&relation, relation_param);


	object_init_ex(return_value, arangodbclient_edgedefinition_ce);
	ZEPHIR_CALL_METHOD(NULL, return_value, "__construct", NULL, 52, &relation, fromCollections, toCollections);
	zephir_check_call_status();
	RETURN_MM();

}

zend_object *zephir_init_properties_ArangoDBClient_EdgeDefinition(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _2, _1$$3, _3$$4;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_toCollections"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_toCollections"), &_1$$3);
		}
		zephir_read_property(&_2, this_ptr, SL("_fromCollections"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_3$$4);
			array_init(&_3$$4);
			zephir_update_property_zval(this_ptr, SL("_fromCollections"), &_3$$4);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

