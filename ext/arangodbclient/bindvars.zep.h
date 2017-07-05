
extern zend_class_entry *arangodbclient_bindvars_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_BindVars);

PHP_METHOD(ArangoDBClient_BindVars, getAll);
PHP_METHOD(ArangoDBClient_BindVars, getCount);
PHP_METHOD(ArangoDBClient_BindVars, set);
PHP_METHOD(ArangoDBClient_BindVars, get);
zend_object *zephir_init_properties_ArangoDBClient_BindVars(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_bindvars_set, 0, 0, 1)
	ZEND_ARG_INFO(0, name)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_bindvars_get, 0, 0, 1)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_bindvars_method_entry) {
	PHP_ME(ArangoDBClient_BindVars, getAll, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BindVars, getCount, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BindVars, set, arginfo_arangodbclient_bindvars_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_BindVars, get, arginfo_arangodbclient_bindvars_get, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
