
extern zend_class_entry *arangodbclient_aqluserfunction_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_AqlUserFunction);

PHP_METHOD(ArangoDBClient_AqlUserFunction, __construct);
PHP_METHOD(ArangoDBClient_AqlUserFunction, register);
PHP_METHOD(ArangoDBClient_AqlUserFunction, unregister);
PHP_METHOD(ArangoDBClient_AqlUserFunction, getRegisteredUserFunctions);
PHP_METHOD(ArangoDBClient_AqlUserFunction, getConnection);
PHP_METHOD(ArangoDBClient_AqlUserFunction, setName);
PHP_METHOD(ArangoDBClient_AqlUserFunction, getName);
PHP_METHOD(ArangoDBClient_AqlUserFunction, setCode);
PHP_METHOD(ArangoDBClient_AqlUserFunction, getCode);
PHP_METHOD(ArangoDBClient_AqlUserFunction, set);
PHP_METHOD(ArangoDBClient_AqlUserFunction, __set);
PHP_METHOD(ArangoDBClient_AqlUserFunction, get);
PHP_METHOD(ArangoDBClient_AqlUserFunction, __isset);
PHP_METHOD(ArangoDBClient_AqlUserFunction, __get);
PHP_METHOD(ArangoDBClient_AqlUserFunction, __toString);
PHP_METHOD(ArangoDBClient_AqlUserFunction, buildAttributesFromArray);
zend_object *zephir_init_properties_ArangoDBClient_AqlUserFunction(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction___construct, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_ARRAY_INFO(0, attributesArray, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_register, 0, 0, 0)
	ZEND_ARG_INFO(0, name)
	ZEND_ARG_INFO(0, code)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_unregister, 0, 0, 0)
	ZEND_ARG_INFO(0, name)
	ZEND_ARG_INFO(0, namespacee)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_getregistereduserfunctions, 0, 0, 0)
	ZEND_ARG_INFO(0, namespacee)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_setname, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_setcode, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction___set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction___isset, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction___get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_aqluserfunction_buildattributesfromarray, 0, 0, 1)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_aqluserfunction_method_entry) {
	PHP_ME(ArangoDBClient_AqlUserFunction, __construct, arginfo_arangodbclient_aqluserfunction___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_AqlUserFunction, register, arginfo_arangodbclient_aqluserfunction_register, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, unregister, arginfo_arangodbclient_aqluserfunction_unregister, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, getRegisteredUserFunctions, arginfo_arangodbclient_aqluserfunction_getregistereduserfunctions, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, getConnection, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_AqlUserFunction, setName, arginfo_arangodbclient_aqluserfunction_setname, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, getName, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, setCode, arginfo_arangodbclient_aqluserfunction_setcode, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, getCode, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, set, arginfo_arangodbclient_aqluserfunction_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, __set, arginfo_arangodbclient_aqluserfunction___set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, get, arginfo_arangodbclient_aqluserfunction_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, __isset, arginfo_arangodbclient_aqluserfunction___isset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, __get, arginfo_arangodbclient_aqluserfunction___get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AqlUserFunction, buildAttributesFromArray, arginfo_arangodbclient_aqluserfunction_buildattributesfromarray, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
