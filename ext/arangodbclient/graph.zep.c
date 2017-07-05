
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
#include "kernel/array.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_Graph) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, Graph, arangodbclient, graph, arangodbclient_document_ce, arangodbclient_graph_method_entry, 0);

	zend_declare_property_null(arangodbclient_graph_ce, SL("_edgeDefinitions"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(arangodbclient_graph_ce, SL("_orphanCollections"), ZEND_ACC_PROTECTED TSRMLS_CC);

	arangodbclient_graph_ce->create_object = zephir_init_properties_ArangoDBClient_Graph;
	zephir_declare_class_constant_string(arangodbclient_graph_ce, SL("ENTRY_EDGE_DEFINITIONS"), "edgeDefinitions");

	zephir_declare_class_constant_string(arangodbclient_graph_ce, SL("ENTRY_FROM"), "from");

	zephir_declare_class_constant_string(arangodbclient_graph_ce, SL("ENTRY_TO"), "to");

	zephir_declare_class_constant_string(arangodbclient_graph_ce, SL("ENTRY_COLLECTION"), "collection");

	zephir_declare_class_constant_string(arangodbclient_graph_ce, SL("ENTRY_ORPHAN_COLLECTIONS"), "orphanCollections");

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_Graph, __construct) {

	zend_bool _0;
	zephir_fcall_cache_entry *_2 = NULL;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *name_param = NULL, *options_param = NULL, _1$$3;
	zval name, options;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&name);
	ZVAL_UNDEF(&options);
	ZVAL_UNDEF(&_1$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 2, &name_param, &options_param);

	if (!name_param) {
		ZEPHIR_INIT_VAR(&name);
		array_init(&name);
	} else {
		zephir_get_arrval(&name, name_param);
	}
	if (!options_param) {
		ZEPHIR_INIT_VAR(&options);
		array_init(&options);
	} else {
		zephir_get_arrval(&options, options_param);
	}


	_0 = !(Z_TYPE_P(&name) == IS_ARRAY);
	if (_0) {
		_0 = !ZEPHIR_IS_STRING_IDENTICAL(&name, "");
	}
	if (_0) {
		ZEPHIR_INIT_VAR(&_1$$3);
		ZVAL_STRING(&_1$$3, "_key");
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "set", NULL, 0, &_1$$3, &name);
		zephir_check_call_status();
	}
	ZEPHIR_CALL_PARENT(NULL, arangodbclient_graph_ce, getThis(), "__construct", &_2, 0, &options);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Graph, addEdgeDefinition) {

	zval *edgeDefinition, edgeDefinition_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&edgeDefinition_sub);

	zephir_fetch_params(0, 1, 0, &edgeDefinition);



	zephir_update_property_array_append(this_ptr, SL("_edgeDefinitions"), edgeDefinition TSRMLS_CC);
	RETURN_THISW();

}

PHP_METHOD(ArangoDBClient_Graph, getEdgeDefinitions) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_edgeDefinitions");

}

PHP_METHOD(ArangoDBClient_Graph, addOrphanCollection) {

	zval *orphanCollection_param = NULL;
	zval orphanCollection;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&orphanCollection);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &orphanCollection_param);

	zephir_get_strval(&orphanCollection, orphanCollection_param);


	zephir_update_property_array_append(this_ptr, SL("_orphanCollections"), &orphanCollection TSRMLS_CC);
	RETURN_THIS();

}

PHP_METHOD(ArangoDBClient_Graph, getOrphanCollections) {

	zval *this_ptr = getThis();


	RETURN_MEMBER(getThis(), "_orphanCollections");

}

PHP_METHOD(ArangoDBClient_Graph, set) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL, *_5 = NULL, *_8 = NULL, *_10 = NULL, *_11 = NULL, *_14 = NULL, *_15 = NULL;
	zval *key_param = NULL, *value, value_sub, edgeDefinitionBaseObject, ed, edgeDefinition, from, to, o, _0$$3, *_2$$3, _3$$5, *_4$$5, _6$$5, *_7$$5, _9$$5, _12$$9, *_13$$9;
	zval key;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&key);
	ZVAL_UNDEF(&value_sub);
	ZVAL_UNDEF(&edgeDefinitionBaseObject);
	ZVAL_UNDEF(&ed);
	ZVAL_UNDEF(&edgeDefinition);
	ZVAL_UNDEF(&from);
	ZVAL_UNDEF(&to);
	ZVAL_UNDEF(&o);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_3$$5);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_9$$5);
	ZVAL_UNDEF(&_12$$9);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &key_param, &value);

	zephir_get_strval(&key, key_param);


	if (ZEPHIR_IS_STRING_IDENTICAL(&key, "edgeDefinitions")) {
		zephir_read_property(&_0$$3, this_ptr, SL("_doValidate"), PH_NOISY_CC | PH_READONLY);
		if (zephir_is_true(&_0$$3)) {
			ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_valuevalidator_ce, "validate", &_1, 0, value);
			zephir_check_call_status();
		}
		ZEPHIR_INIT_VAR(&edgeDefinitionBaseObject);
		object_init_ex(&edgeDefinitionBaseObject, arangodbclient_edgedefinition_ce);
		ZEPHIR_CALL_METHOD(NULL, &edgeDefinitionBaseObject, "__construct", NULL, 52);
		zephir_check_call_status();
		zephir_is_iterable(value, 0, "arangodbclient/graph.zep", 62);
		ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(value), _2$$3)
		{
			ZEPHIR_INIT_NVAR(&ed);
			ZVAL_COPY(&ed, _2$$3);
			ZEPHIR_INIT_NVAR(&edgeDefinition);
			if (zephir_clone(&edgeDefinition, &edgeDefinitionBaseObject TSRMLS_CC) == FAILURE) {
				RETURN_MM();
			}
			zephir_array_fetch_string(&_3$$5, &ed, SL("from"), PH_NOISY | PH_READONLY, "arangodbclient/graph.zep", 53 TSRMLS_CC);
			zephir_is_iterable(&_3$$5, 0, "arangodbclient/graph.zep", 56);
			ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_3$$5), _4$$5)
			{
				ZEPHIR_INIT_NVAR(&from);
				ZVAL_COPY(&from, _4$$5);
				ZEPHIR_CALL_METHOD(NULL, &edgeDefinition, "addfromcollection", &_5, 0, &from);
				zephir_check_call_status();
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&from);
			zephir_array_fetch_string(&_6$$5, &ed, SL("to"), PH_NOISY | PH_READONLY, "arangodbclient/graph.zep", 56 TSRMLS_CC);
			zephir_is_iterable(&_6$$5, 0, "arangodbclient/graph.zep", 59);
			ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&_6$$5), _7$$5)
			{
				ZEPHIR_INIT_NVAR(&to);
				ZVAL_COPY(&to, _7$$5);
				ZEPHIR_CALL_METHOD(NULL, &edgeDefinition, "addtocollection", &_8, 0, &to);
				zephir_check_call_status();
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&to);
			zephir_array_fetch_string(&_9$$5, &ed, SL("collection"), PH_NOISY | PH_READONLY, "arangodbclient/graph.zep", 59 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(NULL, &edgeDefinition, "setrelation", &_10, 0, &_9$$5);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "addedgedefinition", &_11, 0, &edgeDefinition);
			zephir_check_call_status();
		} ZEND_HASH_FOREACH_END();
		ZEPHIR_INIT_NVAR(&ed);
	} else {
		if (ZEPHIR_IS_STRING_IDENTICAL(&key, "orphanCollections")) {
			zephir_read_property(&_12$$9, this_ptr, SL("_doValidate"), PH_NOISY_CC | PH_READONLY);
			if (zephir_is_true(&_12$$9)) {
				ZEPHIR_CALL_CE_STATIC(NULL, arangodbclient_valuevalidator_ce, "validate", &_1, 0, value);
				zephir_check_call_status();
			}
			zephir_is_iterable(value, 0, "arangodbclient/graph.zep", 70);
			ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(value), _13$$9)
			{
				ZEPHIR_INIT_NVAR(&o);
				ZVAL_COPY(&o, _13$$9);
				ZEPHIR_CALL_METHOD(NULL, this_ptr, "addorphancollection", &_14, 0, &o);
				zephir_check_call_status();
			} ZEND_HASH_FOREACH_END();
			ZEPHIR_INIT_NVAR(&o);
		} else {
			ZEPHIR_CALL_PARENT(NULL, arangodbclient_graph_ce, getThis(), "set", &_15, 0, &key, value);
			zephir_check_call_status();
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ArangoDBClient_Graph, getSingleUndirectedRelation) {

	zend_bool _0, _1, _3, _5;
	zval ed, a, b, c, eD, _2, _4, _6, _7, _8$$5;
	zend_long ZEPHIR_LAST_CALL_STATUS;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&ed);
	ZVAL_UNDEF(&a);
	ZVAL_UNDEF(&b);
	ZVAL_UNDEF(&c);
	ZVAL_UNDEF(&eD);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_7);
	ZVAL_UNDEF(&_8$$5);

	ZEPHIR_MM_GROW();

	ZEPHIR_CALL_METHOD(&ed, this_ptr, "getedgedefinitions", NULL, 0);
	zephir_check_call_status();
	if (zephir_fast_count_int(&ed TSRMLS_CC) > 0) {
		ZEPHIR_OBS_VAR(&a);
		zephir_array_fetch_long(&a, &ed, 0, PH_NOISY, "arangodbclient/graph.zep", 82 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(&b, &a, "getfromcollections", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&c, &a, "gettocollections", NULL, 0);
		zephir_check_call_status();
	}
	_0 = zephir_fast_count_int(&ed TSRMLS_CC) > 1;
	if (!(_0)) {
		_1 = zephir_fast_count_int(&ed TSRMLS_CC) == 1;
		if (_1) {
			ZEPHIR_CALL_METHOD(&_2, &a, "getfromcollections", NULL, 0);
			zephir_check_call_status();
			_3 = zephir_fast_count_int(&_2 TSRMLS_CC) > 1;
			if (!(_3)) {
				ZEPHIR_CALL_METHOD(&_4, &a, "gettocollections", NULL, 0);
				zephir_check_call_status();
				_3 = zephir_fast_count_int(&_4 TSRMLS_CC) > 1;
			}
			_5 = _3;
			if (!(_5)) {
				zephir_array_fetch_long(&_6, &b, 0, PH_NOISY | PH_READONLY, "arangodbclient/graph.zep", 86 TSRMLS_CC);
				zephir_array_fetch_long(&_7, &c, 0, PH_NOISY | PH_READONLY, "arangodbclient/graph.zep", 86 TSRMLS_CC);
				_5 = !ZEPHIR_IS_IDENTICAL(&_6, &_7);
			}
			_1 = _5;
		}
		_0 = _1;
	}
	if (_0) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(arangodbclient_clientexception_ce, "This operation only supports graphs with one undirected single collection relation", "arangodbclient/graph.zep", 87);
		return;
	}
	if (zephir_fast_count_int(&ed TSRMLS_CC) == 1) {
		ZEPHIR_OBS_VAR(&eD);
		zephir_array_fetch_long(&eD, &ed, 0, PH_NOISY, "arangodbclient/graph.zep", 90 TSRMLS_CC);
		ZEPHIR_INIT_VAR(&_8$$5);
		array_init(&_8$$5);
		zephir_update_property_zval(this_ptr, SL("_edgeDefinitions"), &_8$$5);
	} else {
		ZEPHIR_INIT_NVAR(&eD);
		object_init_ex(&eD, arangodbclient_edgedefinition_ce);
		ZEPHIR_CALL_METHOD(NULL, &eD, "__construct", NULL, 52);
		zephir_check_call_status();
	}
	RETURN_CCTOR(&eD);

}

zend_object *zephir_init_properties_ArangoDBClient_Graph(zend_class_entry *class_type TSRMLS_DC) {

		zval _0, _2, _4, _6, _1$$3, _3$$4, _5$$5, _7$$6;
		ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_4);
	ZVAL_UNDEF(&_6);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_3$$4);
	ZVAL_UNDEF(&_5$$5);
	ZVAL_UNDEF(&_7$$6);

		ZEPHIR_MM_GROW();
	
	{
		zval local_this_ptr, *this_ptr = &local_this_ptr;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		zephir_read_property(&_0, this_ptr, SL("_orphanCollections"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_1$$3);
			array_init(&_1$$3);
			zephir_update_property_zval(this_ptr, SL("_orphanCollections"), &_1$$3);
		}
		zephir_read_property(&_2, this_ptr, SL("_hiddenAttributes"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_3$$4);
			array_init(&_3$$4);
			zephir_update_property_zval(this_ptr, SL("_hiddenAttributes"), &_3$$4);
		}
		zephir_read_property(&_4, this_ptr, SL("_values"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_4) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_5$$5);
			array_init(&_5$$5);
			zephir_update_property_zval(this_ptr, SL("_values"), &_5$$5);
		}
		zephir_read_property(&_6, this_ptr, SL("_edgeDefinitions"), PH_NOISY_CC | PH_READONLY);
		if (Z_TYPE_P(&_6) == IS_NULL) {
			ZEPHIR_INIT_VAR(&_7$$6);
			array_init(&_7$$6);
			zephir_update_property_zval(this_ptr, SL("_edgeDefinitions"), &_7$$6);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJ_P(this_ptr);
	}

}

