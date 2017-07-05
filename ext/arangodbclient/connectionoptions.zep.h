
extern zend_class_entry *arangodbclient_connectionoptions_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_ConnectionOptions);

PHP_METHOD(ArangoDBClient_ConnectionOptions, __construct);
PHP_METHOD(ArangoDBClient_ConnectionOptions, getAll);
PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetSet);
PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetExists);
PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetUnset);
PHP_METHOD(ArangoDBClient_ConnectionOptions, offsetGet);
PHP_METHOD(ArangoDBClient_ConnectionOptions, getEndpoint);
PHP_METHOD(ArangoDBClient_ConnectionOptions, getDefaults);
PHP_METHOD(ArangoDBClient_ConnectionOptions, getSupportedAuthTypes);
PHP_METHOD(ArangoDBClient_ConnectionOptions, getSupportedConnectionTypes);
PHP_METHOD(ArangoDBClient_ConnectionOptions, validate);
zend_object *zephir_init_properties_ArangoDBClient_ConnectionOptions(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connectionoptions___construct, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, options, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connectionoptions_offsetset, 0, 0, 2)
	ZEND_ARG_INFO(0, offset)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connectionoptions_offsetexists, 0, 0, 1)
	ZEND_ARG_INFO(0, offset)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connectionoptions_offsetunset, 0, 0, 1)
	ZEND_ARG_INFO(0, offset)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_connectionoptions_offsetget, 0, 0, 1)
	ZEND_ARG_INFO(0, offset)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_connectionoptions_method_entry) {
	PHP_ME(ArangoDBClient_ConnectionOptions, __construct, arginfo_arangodbclient_connectionoptions___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_ConnectionOptions, getAll, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, offsetSet, arginfo_arangodbclient_connectionoptions_offsetset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, offsetExists, arginfo_arangodbclient_connectionoptions_offsetexists, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, offsetUnset, arginfo_arangodbclient_connectionoptions_offsetunset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, offsetGet, arginfo_arangodbclient_connectionoptions_offsetget, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, getEndpoint, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, getDefaults, NULL, ZEND_ACC_PROTECTED|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, getSupportedAuthTypes, NULL, ZEND_ACC_PROTECTED|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, getSupportedConnectionTypes, NULL, ZEND_ACC_PROTECTED|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_ConnectionOptions, validate, NULL, ZEND_ACC_PROTECTED)
	PHP_FE_END
};
